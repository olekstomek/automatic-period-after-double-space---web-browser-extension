(function () {
    document.addEventListener('keypress', function (event) {
        element = event.target;
        activeInputFieldSelector = element.tagName + ":nth-child(" + indexOf(element) + ")";
        while ((element = element.parentElement) != null) {
            if (element.tagName === "BODY") {
                activeInputFieldSelector = "BODY > " + activeInputFieldSelector;
                break;
            }
            activeInputFieldSelector = element.tagName + ":nth-child(" + indexOf(element) + ") > " + activeInputFieldSelector;
        }
        
        setTimeout(function () {
            replaceText(activeInputFieldSelector, "  ", ". ");
        }, 0)
    });

    function indexOf(element) {
        parent = element.parentNode;
        var child, index = 1;
        for (child = parent.firstElementChild; child; child = child.nextElementSibling) {
            if (child === element) {
                return index;
            }
            ++index;
        }
        return -1;
    }

    function getCount(str, search) {
        return str.split(search).length - 1;
    }

    function replaceText(activeInputFieldSelector, search, replaceWith) {
        activeInput = document.querySelector(activeInputFieldSelector);
        if (activeInput.value.indexOf(search) >= 0 && activeInput.type !== 'password') {
            start = activeInput.selectionStart;
            end = activeInput.selectionEnd;
            textBefore = activeInput.value.substr(0, end);
            lengthDiff = (replaceWith.length - search.length) * getCount(textBefore, search);
            activeInput.value = activeInput.value.replace(search, replaceWith);
            activeInput.selectionStart = start + lengthDiff;
            activeInput.selectionEnd = end + lengthDiff;
        }
    }
}())
