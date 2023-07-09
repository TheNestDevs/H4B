import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../app/theme/theme.dart';
import 'widgets/chat_bubble.dart';
import 'widgets/send_text_tile.dart';

class ChatScreen extends ConsumerWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Chat with Corti',
          style: AppTheme.theme.textTheme.bodyMedium,
        ),
        backgroundColor: AppTheme.kTealAccentColor,
        leading: BackButton(
          color: Colors.white,
          onPressed: () => context.pop(),
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                ChatBubble(
                  message: 'djwiqjq',
                  sendByMe: true,
                ),
                ChatBubble(
                  message: 'djhifohefhioewfjoiwejfiowewiqjq',
                  sendByMe: false,
                ),
                ChatBubble(
                  message: 'djwfjkefljlkfjfknfiqjfijnfwenfiqjq',
                  sendByMe: true,
                ),
              ],
            ),
          ),
          const Divider(
            color: AppTheme.kTealAccentColor,
            thickness: 1.2,
          ),
          SendTextTile(
            controller: TextEditingController(),
            focusNode: FocusNode(),
          )
        ],
      ),
    );
  }
}
