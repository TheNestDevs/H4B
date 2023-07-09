import 'package:freezed_annotation/freezed_annotation.dart';

part 'record_model.freezed.dart';
part 'record_model.g.dart';

@freezed
class RecordModel with _$RecordModel {
  const factory RecordModel({
    String? id,
    String? apt_doctor,
    String? apt_patient,
    bool? isComplete,
    bool? isTranscript_av,
    String? pres_id,
    String? transcriptURL,
    String? createdAt,
    String? updatedAt,
  }) = _RecordModel;

  factory RecordModel.fromJson(Map<String, dynamic> json) =>
      _$RecordModelFromJson(json);
}
