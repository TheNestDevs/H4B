import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../app/router/router.dart';
import '../../../app/theme/theme.dart';
import '../../record/presentation/provider/record_provider.dart';

class RecentAppointmentsScreen extends ConsumerWidget {
  const RecentAppointmentsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appointments = ref.watch(getAllRecordsProvider);

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Recent Appointments',
          style: AppTheme.theme.textTheme.bodyMedium,
        ),
        backgroundColor: AppTheme.kTealAccentColor,
        leading: BackButton(
          color: Colors.white,
          onPressed: () => context.pop(),
        ),
      ),
      body: SizedBox(
        height: 1.sh,
        child: appointments.when(
          data: (data) => Container(
            child: Column(
              children: [
                Expanded(
                  child: ListView.builder(
                    itemCount: data.appointments.length,
                    itemBuilder: (context, index) {
                      return Padding(
                        padding: EdgeInsets.symmetric(
                          vertical: 16.h,
                          horizontal: 18.w,
                        ),
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              colors: [
                                const Color(0xFF7BD18F).withOpacity(0.85),
                                const Color(0xFF339798),
                              ],
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                            ),
                            borderRadius: BorderRadius.circular(10.r),
                          ),
                          child: ListTile(
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10.r),
                            ),
                            onTap: () {
                              context.go('');
                            },
                            title: Text(
                              data.appointments[index].apt_doctor!,
                              style:
                                  AppTheme.theme.textTheme.bodyMedium!.copyWith(
                                color: Colors.white,
                              ),
                            ),
                            trailing: ElevatedButton(
                              onPressed: () => context.push(
                                AppRouterPath.videoCall,
                              ),
                              child: Text(
                                'Video Call',
                                style: GoogleFonts.inter(
                                  fontSize: 10.sp,
                                  fontWeight: FontWeight.w600,
                                  color: Colors.black,
                                ),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          error: (err, stackTrace) {},
          loading: () => const Center(
            child: CircularProgressIndicator(),
          ),
        ),
      ),
    );
  }
}
