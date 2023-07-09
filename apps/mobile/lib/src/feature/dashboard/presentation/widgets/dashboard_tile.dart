import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../../app/theme/theme.dart';

class DashboardTile extends ConsumerWidget {
  final String title;
  final String image;

  const DashboardTile({
    super.key,
    required this.title,
    required this.image,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Container(
        height: 100.w,
        width: 100.w,
        decoration: BoxDecoration(
          color: AppTheme.kLightGreenColor,
          borderRadius: BorderRadius.circular(15.r),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                image,
                height: 50.w,
                width: 50.w,
              ),
              3.verticalSpace,
              Text(
                title,
                style: GoogleFonts.inter(
                  fontSize: 11.5.sp,
                  fontWeight: FontWeight.w500,
                  color: Colors.black,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
