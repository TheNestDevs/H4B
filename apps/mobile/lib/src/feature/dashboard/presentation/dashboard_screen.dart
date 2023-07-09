import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/src/app/router/router.dart';

import '../../../app/theme/theme.dart';
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
          Center(
            child: Container(
              height: 125.h,
              width: 330.w,
              decoration: BoxDecoration(
                color: AppTheme.kTealAccentColor,
                borderRadius: BorderRadius.circular(15.r),
              ),
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Appointment due',
                      style: GoogleFonts.inter(
                        fontSize: 11.5.sp,
                        fontWeight: FontWeight.w600,
                        color: Colors.white.withOpacity(0.75),
                      ),
                    ),
                    2.verticalSpace,
                    Row(
                      children: [
                        Icon(
                          Icons.schedule,
                          color: Colors.white,
                          size: 28.w,
                        ),
                        10.horizontalSpace,
                        Text(
                          '8:30am - 9:00am, Sunday, 9th July 2023',
                          style: GoogleFonts.inter(
                            fontSize: 10.sp,
                            fontWeight: FontWeight.w600,
                            color: Colors.white,
                          ),
                        ),
                        15.verticalSpace,
                      ],
                    ),
                    8.verticalSpace,
                    Row(
                      children: [
                        CircleAvatar(
                          radius: 27.r,
                          backgroundColor: Colors.white,
                          foregroundImage: const AssetImage(
                            'assets/images/doc.png',
                          ),
                        ),
                        10.horizontalSpace,
                        const Text('Dr. Koustav Mondal')
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
