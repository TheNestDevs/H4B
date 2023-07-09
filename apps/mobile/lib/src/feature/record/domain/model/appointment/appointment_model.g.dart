// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'appointment_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_AppointmentModel _$$_AppointmentModelFromJson(Map<String, dynamic> json) =>
    _$_AppointmentModel(
      appointments: (json['appointments'] as List<dynamic>)
          .map((e) => RecordModel.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$_AppointmentModelToJson(_$_AppointmentModel instance) =>
    <String, dynamic>{
      'appointments': instance.appointments,
    };
