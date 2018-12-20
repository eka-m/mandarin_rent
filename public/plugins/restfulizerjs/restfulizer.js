(function ($) {
    var n;
    $.fn.extend({
      restfulizer: function(e) {
        var t = $.extend(
          {
            parse: !1,
            target: null,
            method: "POST",
            csrf: "",
            query_type: null
          },
          e
        );
        return $(this).each(function() {
          var e = $.extend({}, t),
            r = $(this);
          void 0 !== r.attr("data-method") &&
            (e.method = r.attr("data-method").toUpperCase()),
            void 0 !== r.attr("href") && (e.target = r.attr("href")),
            void 0 !== r.attr("data-csrf") && (e.csrf = r.attr("data-csrf")),
            void 0 !== r.attr("data-qtype") &&
              (e.query_type = r.attr("data-qtype"));
          var i = "";
          if (e.parse) {
            var o = e.target.indexOf("?");
            if (o > -1) {
              var a = e.target
                .substr(o + 1)
                .split("#")[0]
                .split("&");
              e.target = e.target.substr(0, o);
              for (var s = 0; s < a.length; s++) {
                var c = a[s].split("=");
                i +=
                  "\t<input type='hidden' name='" +
                  decodeURIComponent(c[0]) +
                  "' value='" +
                  decodeURIComponent(c[1]) +
                  "'>\n";
              }
            }
          }
          var u = "";
          if (
            (null !== e.query_type &&
              (u =
                "<input type='hidden' name='query_type' value='" +
                e.query_type +
                "'>"),
            "GET" == e.method || "POST" == e.method)
          )
            var l =
              "\n<form action='" +
              e.target +
              "' method='" +
              e.method +
              "' style='display:none'>\n" +
              i +
              "<input type='hidden' name='_token' value='" +
              e.csrf +
              "'>" +
              u +
              "</form>\n";
          else
            l =
              "\n<form action='" +
              e.target +
              "' method='POST' style='display:none'>\n\t<input type='hidden' name='_method' value='" +
              e.method +
              "'>\n" +
              i +
              "<input type='hidden' name='_token' value='" +
              e.csrf +
              "'>" +
              u +
              "</form>\n";
          r
            .append(l)
            .removeAttr("href")
            .attr("style", "cursor:pointer;")
            .attr("onclick", '$(this).find("form").submit();');
        });
      }
    });
})(jQuery);