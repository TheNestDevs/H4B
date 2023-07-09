import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/repository/record_repository.dart';
import '../../domain/model/appointment/appointment_model.dart';
import '../../domain/states/records.dart';

final recordNotifierProvider =
    StateNotifierProvider<RecordNotifier, RecordState>(
  (ref) => RecordNotifier(
    recordRepository: ref.watch(recordRepositoryProvider),
  ),
);

final getAllRecordsProvider = FutureProvider.autoDispose<AppointmentModel>(
  (ref) async {
    final recordRepo = ref.watch(recordRepositoryProvider);
    final records = await recordRepo.getRecords();

    return records;
  },
);

class RecordNotifier extends StateNotifier<RecordState> {
  final RecordRepository _recordRepository;

  RecordNotifier({required RecordRepository recordRepository})
      : _recordRepository = recordRepository,
        super(RecordInitialState());

  Future<void> getRecords() async {
    state = RecordLoadingState();
    final records = await _recordRepository.getRecords();

    if (records.appointments.isEmpty) {
      state = RecordLoadedState(
        record: const AppointmentModel(appointments: []),
      );
      return;
    } else {
      state = RecordLoadedState(record: records);
      return;
    }
  }
}
