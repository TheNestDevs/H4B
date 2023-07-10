import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../provider/global_provider.dart';

final chatRepositoryProvider = Provider.autoDispose<ChatRepository>(
  (ref) => ChatRepository(
    dioClient: Dio(
      BaseOptions(
        contentType: 'application/json',
        baseUrl: ref.watch(baseUrlProvider),
        responseType: ResponseType.json,
      ),
    ),
  ),
);

class ChatRepository {
  final Dio _dioClient;

  ChatRepository({
    required Dio dioClient,
  }) : _dioClient = dioClient;

  Future<String> getSpecialist(String symp) async {
    try {
      Response<dynamic> res =
          await _dioClient.post('/ask/symp', data: {"symptoms": symp});

      if (res.data['response'].isEmpty) {
        throw Exception('No specialist found');
      }

      final specialist = res.data['response'][0]['specialist'];

      return specialist;
    } catch (err) {
      print(err.toString());
      rethrow;
    }
  }

  Future<dynamic> bookAppointment() async {
    try {
      Response<dynamic> res = await _dioClient.post(
        '/apt',
        data: {
          "apt_doctor": "Anil",
          "apt_patient": "Rakesh",
          "isComplete": false,
          "isTranscript_av": false,
          "transcriptURL": "na",
          "apt_start": "22 Dec 2003",
          "apt_end": "27 Dec 2003"
        },
      );
    } catch (err) {
      print(err.toString());
      rethrow;
    }
  }
}
