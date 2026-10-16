<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'SchemaMarkup',
  props: {
    // La propriété 'markup' recevra le JSON-LD sous forme de string
    markup: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // Crée l'élément script dans le hook onMounted
    onMounted(() => {
      if (props.markup) {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = props.markup;
        
        // Injecte la balise dans le <head> de la page
        document.head.appendChild(script);
      }
    });
    
    // Le composant ne rend rien dans le DOM visible
    return () => null; 
  }
});
</script>