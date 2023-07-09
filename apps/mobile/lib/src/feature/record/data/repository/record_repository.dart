import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../domain/model/appointment/appointment_model.dart';

final recordRepositoryProvider = Provider(
  (ref) => RecordRepository(
    dioClient: Dio(
      BaseOptions(
        contentType: 'application/json',
        baseUrl: 'https://5b91-203-171-240-120.ngrok-free.app',
        responseType: ResponseType.json,
      ),
    ),
  ),
);

class RecordRepository {
  final Dio _dioClient;

  RecordRepository({
    required Dio dioClient,
  }) : _dioClient = dioClient;

  Future<AppointmentModel> getRecords() async {
    try {
      final res = await _dioClient.get('/apt');
      AppointmentModel appointments = AppointmentModel.fromJson(res.data);

      return appointments;
    } catch (err) {
      print(err.toString());
      rethrow;
    }
  }

  Future<dynamic> getRecordPrescription(String id) async {}
}
