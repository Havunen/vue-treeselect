import { mount } from '@vue/test-utils'
import Treeselect from '@src/components/Treeselect'
import { leftClick, findCheckboxByNodeId, findLabelContainerByNodeId } from './shared'

describe('Events', () => {
  describe('select & deselect', () => {
    let wrapper

    const aa = {
      id: 'aa',
      label: 'aa',
    }
    const ab = {
      id: 'ab',
      label: 'ab',
      isDisabled: true,
    }
    const a = {
      id: 'a',
      label: 'a',
      isDefaultExpanded: true,
      children: [ aa, ab ],
    }

    beforeEach(async () => {
      wrapper = mount(Treeselect, {
        propsData: {
          options: [ a ],
          instanceId: 'test',
          multiple: true,
          value: [ 'ab' ],
        },
      })
      wrapper.vm.openMenu()
      await wrapper.vm.$nextTick()
    })

    it('click on option label or checkbox', async () => {
      await leftClick(findLabelContainerByNodeId(wrapper, 'aa'))
      expect(wrapper.emitted().select).toEqual([
        [ aa, 'test' ],
      ])

      await leftClick(findCheckboxByNodeId(wrapper, 'aa'))
      expect(wrapper.emitted().deselect).toEqual([
        [ aa, 'test' ],
      ])
    })

    it('click on disabled option', async () => {
      await leftClick(findLabelContainerByNodeId(wrapper, 'ab'))
      expect(wrapper.emitted().deselect).toBeUndefined()
    })

    it('click on value remove icon', async () => {
      await wrapper.setProps({ value: [ 'a' ] })

      // click on "×" of a
      await leftClick(wrapper.find('.vue-treeselect__value-remove'))
      expect(wrapper.emitted().deselect).toEqual([
        [ a, 'test' ],
      ])
    })
  })

  // TODO
})
