import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';

import '../../../app/router/router.dart';
import 'widgets/dashboard_appointment_tile.dart';
import 'widgets/dashboard_header.dart';
import 'widgets/dashboard_tile.dart';

class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Column(
        children: [
          const DashboardHeader(),
          25.verticalSpace,
          const DashboardAppointmentTile(),
          12.verticalSpace,
          Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                DashboardTile(
                  title: 'Ambulance',
                  image: 'assets/images/ambu.png',
                  onTap: () => {},
                ),
                DashboardTile(
                  title: 'Records',
                  image: 'assets/images/reports.png',
                  onTap: () => context.push(AppRouterPath.record),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
