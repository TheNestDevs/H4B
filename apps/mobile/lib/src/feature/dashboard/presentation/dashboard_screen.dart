import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'widgets/dashboard_header.dart';
import 'widgets/dashboard_tile.dart';

class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Scaffold(
      body: Column(
        children: [
          DashboardHeader(),
          Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                DashboardTile(
                  title: 'Ambulance',
                  image: 'assets/images/ambu.png',
                ),
                DashboardTile(
                  title: 'Records',
                  image: 'assets/images/reports.png',
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
