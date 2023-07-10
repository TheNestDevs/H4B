import 'package:flutter_riverpod/flutter_riverpod.dart';

final userNameProvider = Provider<String>((ref) => 'Rahul Rajput');

final doctorNameProvider = Provider<String>((ref) => 'Dr. Corti');

final baseUrlProvider =
    Provider<String>((ref) => 'https://5b91-203-171-240-120.ngrok-free.app');
