import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';

import '../../../app/theme/theme.dart';
import 'provider/record_provider.dart';

class RecordScreen extends ConsumerWidget {
  const RecordScreen({super.key});

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
        data: (data) => ListView.builder(
          itemCount: data.appointments.length,
          itemBuilder: (context, index) {
            return Padding(
              padding: EdgeInsets.symmetric(
                vertical: 16.h,
                horizontal: 18.w,
              ),
              child: ListTile(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10.r),
                ),
                style: ListTileStyle.list,
                tileColor: AppTheme.kTealAccentColor,
                onTap: () => {},
                trailing: ElevatedButton(
                  onPressed: () {},
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
            );
          },
        ),
        error: (err, stackTrace) {},
        loading: () => const Center(
          child: CircularProgressIndicator(),
        ),
      ),
    );
  }
}