// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolCallResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolCallResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const wework_send_messageTool: Tool = {
  definition: {
    name: 'wework_send_message',
    description: 'Send a message to a WeChat Work conversation or channel',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[wechat-work] wework_send_message executed');
      return ok('wework_send_message', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'wework_send_message',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const wework_list_contactsTool: Tool = {
  definition: {
    name: 'wework_list_contacts',
    description: 'List contacts and departments',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[wechat-work] wework_list_contacts executed');
      return ok('wework_list_contacts', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'wework_list_contacts',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const wework_create_approvalTool: Tool = {
  definition: {
    name: 'wework_create_approval',
    description: 'Create an approval workflow request',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[wechat-work] wework_create_approval executed');
      return ok('wework_create_approval', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'wework_create_approval',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const wework_get_notificationsTool: Tool = {
  definition: {
    name: 'wework_get_notifications',
    description: 'Get recent notifications and alerts',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[wechat-work] wework_get_notifications executed');
      return ok('wework_get_notifications', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'wework_get_notifications',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-wechat-work] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-wechat-work] Unloading...');
}
export const tools: Tool[] = [
  wework_send_messageTool,
  wework_list_contactsTool,
  wework_create_approvalTool,
  wework_get_notificationsTool,
];
