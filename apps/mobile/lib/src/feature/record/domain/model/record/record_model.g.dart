// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'record_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_RecordModel _$$_RecordModelFromJson(Map<String, dynamic> json) =>
    _$_RecordModel(
      id: json['id'] as String?,
      apt_doctor: json['apt_doctor'] as String?,
      apt_patient: json['apt_patient'] as String?,
      isComplete: json['isComplete'] as bool?,
      isTranscript_av: json['isTranscript_av'] as bool?,
      pres_id: json['pres_id'] as String?,
      transcriptURL: json['transcriptURL'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
    );

Map<String, dynamic> _$$_RecordModelToJson(_$_RecordModel instance) =>
    <String, dynamic>{
      'id': instance.id,
      'apt_doctor': instance.apt_doctor,
      'apt_patient': instance.apt_patient,
      'isComplete': instance.isComplete,
      'isTranscript_av': instance.isTranscript_av,
      'pres_id': instance.pres_id,
      'transcriptURL': instance.transcriptURL,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
    };
