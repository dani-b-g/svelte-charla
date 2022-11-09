<script>
  import Prism from "prismjs";

  import "prismjs/themes/prism-tomorrow.css";
  import "prismjs/prism.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";

  export let code = undefined;
  export let codeType = 'javascript';

  setTimeout(() => {
    Prism.highlightAll();
  }, 0);
</script>

<pre data-start="0" class=" line-numbers language-{codeType} ">
        <code class="language-{codeType}">
            <!-- prettier-ignore -->
            {@html Prism.highlight(code, Prism.languages.javascript,'javascript')}
        </code>
 </pre>

<style>
</style>
