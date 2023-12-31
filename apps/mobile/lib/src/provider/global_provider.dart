import 'package:flutter_riverpod/flutter_riverpod.dart';

final userNameProvider = Provider<String>((ref) => 'Rahul Rajput');

final doctorNameProvider = Provider<String>((ref) => 'Dr. Corti');

final baseUrlProvider = Provider<String>((ref) => 'https://api.zenithmed.xyz');
