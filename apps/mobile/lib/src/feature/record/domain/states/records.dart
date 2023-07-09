import 'package:equatable/equatable.dart';

import '../model/appointment/appointment_model.dart';

abstract class RecordState extends Equatable {}

class RecordInitialState extends RecordState {
  @override
  List<Object?> get props => [];
}

class RecordLoadingState extends RecordState {
  @override
  List<Object?> get props => [];
}

class RecordLoadedState extends RecordState {
  final AppointmentModel record;

  RecordLoadedState({required this.record});

  @override
  List<Object?> get props => [record];
}
