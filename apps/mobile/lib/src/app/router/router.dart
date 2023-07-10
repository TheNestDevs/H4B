import 'package:go_router/go_router.dart';

import '../../feature/chat/presentation/chat_screen.dart';
import '../../feature/chat/presentation/widgets/appointment_success.dart';
import '../../feature/dashboard/presentation/dashboard_screen.dart';
import '../../feature/record/presentation/record_screen.dart';

class AppRouterPath {
  static const String dashboard = '/dashboard';
  static const String chat = '/chat-with-corti';
  static const String record = '/record';
  static const String successAppointment = '/success';
}

class AppRouter {
  static GoRouter router = GoRouter(
    initialLocation: AppRouterPath.dashboard,
    routes: [
      GoRoute(
        path: AppRouterPath.dashboard,
        builder: (context, state) => const DashboardScreen(),
      ),
      GoRoute(
        path: AppRouterPath.chat,
        builder: (context, state) => const ChatScreen(),
      ),
      GoRoute(
        path: AppRouterPath.successAppointment,
        builder: (context, state) => const AppointmentSuccess(),
      ),
      GoRoute(
        path: AppRouterPath.record,
        builder: (context, state) => const RecordScreen(),
      ),
    ],
  );
}
