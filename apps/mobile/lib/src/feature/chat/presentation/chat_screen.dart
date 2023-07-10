import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';

import '../../../app/theme/theme.dart';
import 'widgets/chat_bubble.dart';
import 'widgets/send_text_tile.dart';

final chatBubblesProvider = StateProvider<List<ChatBubble>>(
  (ref) => [
    const ChatBubble(
      message: 'Hello there, I am Corti, your personal health assistant.',
      sendByMe: false,
    ),
    const ChatBubble(
      message: 'Tell me about your symptoms.',
      sendByMe: false,
    ),
  ],
);

class ChatScreen extends ConsumerWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final chatBubbles = ref.watch(chatBubblesProvider);

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
                SizedBox(
                  height: MediaQuery.of(context).viewInsets.bottom == 0
                      ? 0.8.sh
                      : 0.47.sh,
                  child: ListView.builder(
                    itemCount: chatBubbles.length,
                    // reverse: true,
                    keyboardDismissBehavior:
                        ScrollViewKeyboardDismissBehavior.onDrag,
                    itemBuilder: (context, i) => chatBubbles[i],
                  ),
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
