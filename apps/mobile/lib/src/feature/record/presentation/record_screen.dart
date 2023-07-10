import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../app/theme/theme.dart';
import 'provider/record_provider.dart';

class RecordScreen extends ConsumerWidget {
  const RecordScreen({super.key});

  Future<void> viewPrescription(String id, WidgetRef ref) async {
    await launchUrl(
      Uri.parse("https://google.com"),
      mode: LaunchMode.externalApplication,
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final allRecords = ref.watch(getAllRecordsProvider);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppTheme.kTealAccentColor,
        title: Text(
          'Record Screen',
          style: AppTheme.theme.textTheme.bodyMedium,
        ),
        leading: BackButton(
          color: Colors.white,
          onPressed: () => context.pop(),
          style: ButtonStyle(iconSize: MaterialStateProperty.all<double>(28)),
        ),
      ),
      body: allRecords.when(
        data: (data) =>
            ListView.builder(
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
                      style: ListTileStyle.list,
                      tileColor: Colors.transparent,
                      onTap: () => {},
                      trailing: ElevatedButton(
                        onPressed: () => viewPrescription('', ref),
                        child: Text(
                          'View Prescription',
                          style: AppTheme.theme.textTheme.displaySmall,
                        ),
                      ),
                      title: Text(
                        'Doctor : ${data.appointments[index].apt_doctor!}',
                        style: AppTheme.theme.textTheme.bodyMedium,
                      ),
                    ),
                  ),
                );
              },
            ),
        error: (err, stackTrace) {},
        loading: () =>
        const Center(
          child: CircularProgressIndicator(),
        ),
      ),
    );
  }
}
