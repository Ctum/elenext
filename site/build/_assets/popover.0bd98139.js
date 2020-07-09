import { d as defineComponent, s as script$1, B as Button, P as Popover, r as resolveComponent, o as openBlock, c as createBlock, b as createVNode, w as withCtx, F as Fragment, e as createTextVNode, _ as _toDisplayString } from './index.6a414f05.js';

var script = defineComponent({
  components: {
    Preview: script$1,
    ElButton: Button,
    ElPopover: Popover
  }
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", null, "ElPopover", -1);
const _hoisted_2 = /*#__PURE__*/createTextVNode("hover 激活");
const _hoisted_3 = /*#__PURE__*/createTextVNode("click 激活");
const _hoisted_4 = /*#__PURE__*/createTextVNode(/*#__PURE__*/_toDisplayString(`
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference><el-button>hover 激活</el-button></template>
      </el-popover>

      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference><el-button>click 激活</el-button></template>
      </el-popover>
      `), 1 /* TEXT */);

function render(_ctx, _cache) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_popover = resolveComponent("el-popover");
  const _component_Preview = resolveComponent("Preview");

  return (openBlock(), createBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_Preview, { title: "不同尺寸" }, {
      template: withCtx(() => [
        _hoisted_4
      ]),
      default: withCtx(() => [
        createVNode(_component_el_popover, {
          placement: "top-start",
          title: "标题",
          width: "200",
          trigger: "hover",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_button, null, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_popover, {
          placement: "bottom",
          title: "标题",
          width: "200",
          trigger: "click",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_button, null, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;

export default script;
