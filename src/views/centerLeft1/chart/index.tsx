import { defineComponent, reactive } from 'vue'
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup() {
    const cdata = reactive({
      xData: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6'],
      seriesData: [
        { value: 10, name: 'rose1' },
        { value: 5, name: 'rose2' },
        { value: 15, name: 'rose3' },
        { value: 25, name: 'rose4' },
        { value: 20, name: 'rose5' },
        { value: 35, name: 'rose6' }
      ]
    })

    return () => {
      return <div>
        <Draw cdata={cdata} />
      </div>
    }
  }
})