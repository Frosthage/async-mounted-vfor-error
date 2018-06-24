import { shallowMount, createLocalVue } from '@vue/test-utils';
import BeforeSleep from '@/components/BeforeSleep.vue';
import AfterSleep from '@/components/AfterSleep.vue';

describe('BeforeSleep.vue', () => {
  it('renders props.msg when passed', async () => {

    const localVue = createLocalVue();
    localVue.config.productionTip = true;
    const wrapper = shallowMount(BeforeSleep, {
      localVue,
    });

    await localVue.nextTick();

    expect(wrapper.findAll('.before h1').length).toBe(3);
  });
});

describe('AfterSleep.vue', () => {
  it('renders props.msg when passed', async () => {

    const localVue = createLocalVue();
    localVue.config.productionTip = true;
    const wrapper = shallowMount(AfterSleep, {

    });

    await localVue.nextTick();




    expect(wrapper.findAll('.after h1').length).toBe(3);
  });
});
