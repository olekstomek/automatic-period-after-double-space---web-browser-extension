console.log('foreground works works first!');
(function() {
    console.log('foreground works!');
    document.addEventListener('keyup', function(event) {
        var element = event.target;
        var activeInputFieldSelector = element.tagName + ":nth-child(" + indexOf(element) + ")";
        while ((element = element.parentElement) != null) {
            if (element.tagName === "BODY") {
                activeInputFieldSelector = "BODY > " + activeInputFieldSelector;
                break;
            }
            activeInputFieldSelector = element.tagName + ":nth-child(" + indexOf(element) + ") > " + activeInputFieldSelector;
        }
        console.log(activeInputFieldSelector);

        if (event.keyCode === 32) {
            var originalValue = document.querySelector(activeInputFieldSelector).value.trimStart();
            console.log(originalValue);
            var correctedValue = originalValue.replaceAll("  ", ". ");
            console.log(correctedValue);
            document.querySelector(activeInputFieldSelector).value = correctedValue;
        } else {
            return;
        }
    });

    function indexOf(element) {
        var parent = element.parentNode;
        var child, index = 1;
        for (child = parent.firstElementChild; child; child = child.nextElementSibling) {
            if (child === element) {
                return index;
            }
            ++index;
        }
        return -1;
    }
})();