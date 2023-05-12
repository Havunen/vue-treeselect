import { mount } from '@vue/test-utils'
import Treeselect from '@src/components/Treeselect'
import { leftClick } from './shared'

describe('Control', () => {
  it('should toggle the menu when the arrow is clicked', async () => {
    const wrapper = mount(Treeselect, {
      sync: false,
      attachToDocument: true,
      propsData: {
        options: [],
      },
    })
    const arrow = wrapper.find('.vue-treeselect__control-arrow-container')

    await leftClick(arrow)
    expect(wrapper.vm.menu.isOpen).toBe(true)
    await leftClick(arrow)
    expect(wrapper.vm.menu.isOpen).toBe(false)
  })
})
