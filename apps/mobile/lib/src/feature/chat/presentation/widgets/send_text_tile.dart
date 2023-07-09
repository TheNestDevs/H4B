import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../../app/theme/theme.dart';

class SendTextTile extends ConsumerWidget {
  final TextEditingController? controller;
  final FocusNode? focusNode;

  const SendTextTile({
    super.key,
    this.controller,
    this.focusNode,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Padding(
      padding: const EdgeInsets.only(
        bottom: 8.0,
        left: 8.0,
        right: 8.0,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.max,
        children: [
          SizedBox(
            width: 320.w,
            child: TextField(
              controller: controller,
              focusNode: focusNode,
              keyboardType: TextInputType.text,
              maxLines: 3,
              minLines: 1,
              style: AppTheme.theme.textTheme.labelMedium,
              decoration: InputDecoration(
                hintText: 'Type a message',
                hintStyle: AppTheme.theme.textTheme.labelMedium,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15.r),
                  borderSide: const BorderSide(
                    color: AppTheme.kTealAccentColor,
                    width: 1.2,
                  ),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15.r),
                  borderSide: const BorderSide(
                    color: AppTheme.kTealAccentColor,
                    width: 1.2,
                  ),
                ),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15.r),
                ),
                contentPadding: const EdgeInsets.all(12.0),
              ),
            ),
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(
              Icons.send,
              color: AppTheme.kTealAccentColor,
              size: 38.0,
            ),
          )
        ],
      ),
    );
  }
}