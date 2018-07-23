import { shallowMount, createLocalVue } from '@vue/test-utils';
import BeforeSleep from '@/components/BeforeSleep.vue';
import AfterSleep from '@/components/AfterSleep.vue';

describe('BeforeSleep.vue', () => {
  it('Assigns array before sleep', async () => {

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
  it('Assigns array after sleep', async () => {

    const localVue = createLocalVue();
    localVue.config.productionTip = true;
    const wrapper = shallowMount(AfterSleep, {
      localVue,
    });

    await localVue.nextTick();

    expect(wrapper.findAll('.after h1').length).toBe(3);
  });
});
