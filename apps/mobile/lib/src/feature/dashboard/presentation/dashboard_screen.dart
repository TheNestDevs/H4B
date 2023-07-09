import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Column(
        children: [
          Container(
            height: 381.h,
            width: 390.w,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.only(
                bottomRight: Radius.circular(100.r),
              ),
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Color(0xFF77DB8F),
                  Color(0xFF339798),
                ],
              ),
            ),
            child: SafeArea(
              child: Column(
                children: [
                  Row(
                    children: [
                      Padding(
                        padding: EdgeInsets.symmetric(
                          vertical: 12.h,
                          horizontal: 18.w,
                        ),
                        child: CircleAvatar(
                          foregroundColor: Colors.white70,
                          radius: 28.r,
                        ),
                      ),
                      Text(
                        'Good Morning, Peter',
                      ),
                    ],
                  ),
                  Image.asset(
                    'assets/images/corti.png',
                    width: 178.w,
                    height: 258.h,
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
