import { defineComponent, h, mergeProps } from 'vue';
import { useElMenuContext, useElMenuItem } from './provides';

export default defineComponent({
  name: 'ElMenuItem',
  props: {},
  setup(props, { attrs, slots, emit }) {
    const { root, state } = useElMenuItem();

    const handleClick = e => {
      root.select(state.index.value);
      emit('click', e);
    };

    return () =>
      h(
        'li',
        mergeProps(
          {
            style: [state.style.value],
            class: {
              'el-menu-item': true,
              'is-active': state.isActive.value,
              'is-disabled': false
            },
            role: 'menuitem',
            tabindex: '-1',
            onClick: handleClick
          },
          attrs
        ),
        [slots.default?.(), slots.title?.()]
      );
  }
});
