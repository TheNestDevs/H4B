import 'package:go_router/go_router.dart';

import '../../feature/dashboard/presentation/dashboard_screen.dart';

class AppRouterPath {
  static const String dashboard = '/dashboard';
  static const String videoCall = '/video-call';
}

class AppRouter {
  static GoRouter router = GoRouter(
    initialLocation: AppRouterPath.dashboard,
    routes: [
      GoRoute(
        path: AppRouterPath.dashboard,
        builder: (context, state) => const DashboardScreen(),
      ),
      // GoRoute(
      //   path: AppRouterPath.videoCall,
      //   pageBuilder: (context, state) => const VideoCallPage(),
      // ),
    ],
  );
}
