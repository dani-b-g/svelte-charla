<script>
  import Prism from "prismjs";

  import "prismjs/themes/prism-tomorrow.css";
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";

  export let code = undefined;

  setTimeout(() => {
    Prism.highlightAll();
  }, 0);
</script>

<pre data-start="0" class=" line-numbers language-javascript ">
        <code class="language-javascript">
            <!-- prettier-ignore -->
            {@html Prism.highlight(code, Prism.languages.javascript,'javascript')}
        </code>
 </pre>

<style>
</style>
