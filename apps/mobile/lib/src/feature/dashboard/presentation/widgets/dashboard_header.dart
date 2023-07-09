import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile/src/app/router/router.dart';

import '../../../../app/theme/theme.dart';
import '../../../../provider/global_provider.dart';

class DashboardHeader extends ConsumerWidget {
  const DashboardHeader({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userName = ref.watch(userNameProvider);

    return Container(
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
                    foregroundImage: const AssetImage(
                      'assets/images/user.png',
                    ),
                  ),
                ),
                Text(
                  'Good Morning, \n$userName',
                  style: AppTheme.theme.textTheme.bodyMedium,
                ),
              ],
            ),
            Stack(
              children: [
                Align(
                  alignment: Alignment.bottomRight,
                  heightFactor: 1.11,
                  child: Image.asset(
                    'assets/images/corti.png',
                    width: 170.w,
                    height: 250.h,
                  ),
                ),
                Align(
                  alignment: Alignment.bottomLeft,
                  heightFactor: 1.11,
                  child: Column(
                    children: [
                      Card(
                        margin: EdgeInsets.only(
                          left: 24.w,
                          right: 144.w,
                          top: 30.h,
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: Text(
                            'Hi, I’m Corti, your medical assistant. Tell me how you are feeling now.',
                            style: AppTheme.theme.textTheme.displaySmall,
                          ),
                        ),
                      ),
                      57.verticalSpace,
                      Align(
                        alignment: Alignment.bottomLeft,
                        child: Padding(
                          padding: EdgeInsets.symmetric(horizontal: 24.w),
                          child: ElevatedButton(
                            onPressed: () => context.push(AppRouterPath.chat),
                            style: ButtonStyle(
                              elevation: MaterialStateProperty.all(6),
                              backgroundColor: MaterialStateProperty.all(
                                AppTheme.kTealAccentColor,
                              ),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(12.0),
                              child: Text(
                                'CHAT WITH CORTI',
                                style: AppTheme.theme.textTheme.displayMedium!
                                    .copyWith(
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
