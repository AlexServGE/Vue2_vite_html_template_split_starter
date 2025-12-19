import template from './test.html?raw'

export default {
  name: 'TestComponent',
  
  template: template,
  
  data() {
    return {
      componentTitle: 'Vue 2 with External HTML',
      subtitle: 'Using HTML + JS files separately',
      count: 0,
      showDetails: true,
      items: [
        { id: 1, name: 'Learn Vue' },
        { id: 2, name: 'Master Vite' },
        { id: 3, name: 'Build Projects' }
      ],
      newItem: '',
      renderTime: ''
    }
  },
  
  methods: {

  },
  
  computed: {
   
  },
  
  mounted() {
    
  },
  
}