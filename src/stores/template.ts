export const htmlData = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOURCE TARGET DIFF</title>
    <style>
        select {
            display: block;
            margin: 5px auto;
            padding: 5px
        }

        .compare-result {
            display: flex;
            padding: 10px;
        }

        .compare-result>p {
            width: 50%;
            border: 1px solid #999;
            padding: 10px;
        }

        .is-old ins {
            display: none;
        }

        .is-old del {
            text-decoration: none;
        }

        .is-mark-old ins {
            display: none;
        }

        .is-mark-old del {
            color: red;
        }

        .is-mark-compare ins {
            color: dodgerblue
        }

        .is-mark-compare del {
            color: red;
            font-size: 0.9em;
        }

        .is-mark-new ins {
            color: dodgerblue
        }

        .is-mark-new del {
            display: none;
        }

        .is-new ins {
            text-decoration: none;
        }

        .is-new del {
            display: none;
        }

        footer {
            border-top: dashed gray;
            text-align: center;
            font-size: 0.8em;
        }
    </style>
</head>

<body>
    <select id="view-switch" onchange="change(this)">
        <option value="is-old">OLD</option>
        <option value="is-mark-old">MARK OLD</option>
        <option value="is-mark-compare" selected>MARK COMPARE</option>
        <option value="is-mark-new">MARK NEW</option>
        <option value="is-new">NEW</option>
    </select>

    <div id="result-block" class="is-mark-compare">
        <div class="compare-result">
            <p>
                <!-- SOURCE -->
            </p>
            <p>
                <!-- TARGET -->
            </p>
        </div>
    </div>

    <footer>
        <p>This result file is created by <a href="https://cpkobo.github.io/src-tgt-compare/" target="_blank">this
                site.</a></p>
        <p>Pleass access <a href="https://github.com/CPkobo/src-tgt-compare" target="_blank">github repository</a> to
            get the source cord or feedback.</p>
    </footer>

    <script>
        const change = (obj) => {
            const idx = obj.selectedIndex;
            const value = obj.options[idx].value;
            const blk = document.getElementById("result-block")
            const crtCls = blk.className
            blk.classList.remove(crtCls)
            blk.classList.add(value)
        }
    </script>
</body>
</html>
`