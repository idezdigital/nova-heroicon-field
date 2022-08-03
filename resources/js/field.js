import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-hero-icon-field', IndexField)
  app.component('detail-nova-hero-icon-field', DetailField)
  app.component('form-nova-hero-icon-field', FormField)
})
