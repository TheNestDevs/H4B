import 'package:go_router/go_router.dart';

import '../../feature/chat/presentation/chat_screen.dart';
import '../../feature/dashboard/presentation/dashboard_screen.dart';

class AppRouterPath {
  static const String dashboard = '/dashboard';
  static const String chat = '/chat-with-corti';
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
    ],
  );
}
