<script>
    
    import Prism from 'prismjs';
    // import 'prismjs/themes/prism-tomorrow.css'
    // import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
    // import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
    // import 'prismjs/themes/'
    import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
    import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
    import 'prismjs/themes/prism-tomorrow.css'



    
    export let code = undefined;
</script>


<div>
    <pre class=" line-numbers language-js ">
        <code >
            {@html Prism.highlight(code, Prism.languages.javascript,'javascript')}
        </code>
    </pre>
</div>


<style>
   
</style>
