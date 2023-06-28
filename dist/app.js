"use strict";
function e(e) {
	return (
		(function (e) {
			if (Array.isArray(e)) return r(e);
		})(e) ||
		(function (e) {
			if (
				("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
				null != e["@@iterator"]
			)
				return Array.from(e);
		})(e) ||
		(function (e, t) {
			if (!e) return;
			if ("string" == typeof e) return r(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === n && e.constructor && (n = e.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(e);
			if (
				"Arguments" === n ||
				/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
			)
				return r(e, t);
		})(e) ||
		(function () {
			throw new TypeError(
				"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
			);
		})()
	);
}
function r(e, r) {
	(null == r || r > e.length) && (r = e.length);
	for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
	return n;
}
document.addEventListener("DOMContentLoaded", function () {
	for (
		var r = new Date().getFullYear(),
			t = r - 99,
			n = document.getElementById("year"),
			a = t;
		a <= r;
		a++
	) {
		var o = document.createElement("option");
		(o.value = a), (o.innerHTML = a), n.appendChild(o);
	}
	for (
		var i = document.getElementById("month"),
			d = e(Array(12).keys()).map(function (e) {
				return new Date(0, e).toLocaleString("en", { month: "long" });
			}),
			l = 0;
		l < d.length;
		l++
	) {
		var u = document.createElement("option");
		(u.value = d[l]), (u.innerHTML = d[l]), i.appendChild(u);
	}
	for (var s = document.getElementById("day"), m = 1; m <= 31; m++) {
		var c = document.createElement("option");
		(c.value = m), (c.innerHTML = m), s.appendChild(c);
	}
	var f = document.querySelector(".form__btn");
	function p() {
		f.classList.remove("box_animate_2");
	}
	f.addEventListener("click", function () {
		document.querySelectorAll(".is-invalid").length > 0 &&
			f.classList.toggle("form__btn_animation"),
			f.addEventListener("animationend", p, !1);
	});
}),
	document.addEventListener("DOMContentLoaded", function () {
		var e = document.getElementById("form");
		e &&
			new JustValidate(e, { errorFieldCssClass: "is-invalid" })
				.addField("#first-name", [{ rule: "required", errorMessage: !1 }])
				.addField("#last-name", [{ rule: "required" }])
				.addField("input[type=email]", [
					{ rule: "required" },
					{ rule: "email" },
				])
				.addField("#password", [{ rule: "required" }, { rule: "password" }])
				.addField("#confirmpassword", [
					{ rule: "required" },
					{ rule: "password" },
					{
						validator: function (e, r) {
							return (
								!r["#password"] ||
								!r["#password"].elem ||
								e === r["#password"].elem.value
							);
						},
						errorMessage: "Passwords should be the same",
					},
				]);
	});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwidmFsaWRhdGUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWF4WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1pblllYXIiLCJzZWxlY3RZZWFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwib3B0aW9uWWVhciIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwic2VsZWN0TW9udGgiLCJtb250aHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsImtleXMiLCJtYXAiLCJrZXkiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwibGVuZ3RoIiwib3B0aW9uTW9udGgiLCJzZWxlY3REYXkiLCJkYXkiLCJvcHRpb25EYXkiLCJmb3JtQnRuIiwicXVlcnlTZWxlY3RvciIsIkFuaW1hdGlvbkhhbmRsZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlIiwiY2FsbGJhY2tGb3JtIiwiSnVzdFZhbGlkYXRlIiwiZXJyb3JGaWVsZENzc0NsYXNzIiwiYWRkRmllbGQiLCJydWxlIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdG9yIiwiZmllbGRzIiwiZWxlbSJdLCJtYXBwaW5ncyI6IjB3QkFBQUEsU0FBU0MsaUJBQWlCLG9CQUFvQixXQU83QyxJQUpBLElBQU1DLEdBQVUsSUFBSUMsTUFBT0MsY0FDMUJDLEVBQVVILEVBQVUsR0FDcEJJLEVBQWFOLFNBQVNPLGVBQWUsUUFFN0JDLEVBQUlILEVBQVNHLEdBQUtOLEVBQVNNLElBQUssQ0FDeEMsSUFBTUMsRUFBYVQsU0FBU1UsY0FBYyxVQUMxQ0QsRUFBV0UsTUFBUUgsRUFDbkJDLEVBQVdHLFVBQVlKLEVBQ3ZCRixFQUFXTyxZQUFZSixFQUN4QixDQU1BLElBSkEsSUFBTUssRUFBY2QsU0FBU08sZUFBZSxTQUN0Q1EsRUFBU0MsRUFBSUMsTUFBTSxJQUFJQyxRQUFRQyxLQUFJLFNBQUNDLEdBQUcsT0FDNUMsSUFBSWpCLEtBQUssRUFBR2lCLEdBQUtDLGVBQWUsS0FBTSxDQUFFQyxNQUFPLFFBQVMsSUFFaERkLEVBQUksRUFBR0EsRUFBSU8sRUFBT1EsT0FBUWYsSUFBSyxDQUN2QyxJQUFNZ0IsRUFBY3hCLFNBQVNVLGNBQWMsVUFDM0NjLEVBQVliLE1BQVFJLEVBQU9QLEdBQzNCZ0IsRUFBWVosVUFBWUcsRUFBT1AsR0FDL0JNLEVBQVlELFlBQVlXLEVBQ3pCLENBSUEsSUFGQSxJQUFNQyxFQUFZekIsU0FBU08sZUFBZSxPQUVqQ21CLEVBQU0sRUFBR0EsR0FERSxHQUNrQkEsSUFBTyxDQUM1QyxJQUFNQyxFQUFZM0IsU0FBU1UsY0FBYyxVQUN6Q2lCLEVBQVVoQixNQUFRZSxFQUNsQkMsRUFBVWYsVUFBWWMsRUFDdEJELEVBQVVaLFlBQVljLEVBQ3ZCLENBRUEsSUFBTUMsRUFBVTVCLFNBQVM2QixjQUFjLGNBUXZDLFNBQVNDLElBQ1JGLEVBQVFHLFVBQVVDLE9BQU8sZ0JBQzFCLENBVEFKLEVBQVEzQixpQkFBaUIsU0FBUyxXQUNsQkQsU0FBU2lDLGlCQUFpQixlQUM5QlYsT0FBUyxHQUNuQkssRUFBUUcsVUFBVUcsT0FBTyx1QkFFMUJOLEVBQVEzQixpQkFBaUIsZUFBZ0I2QixHQUFrQixFQUM1RCxHQUlELElDN0NBOUIsU0FBU0MsaUJBQWlCLG9CQUFvQixXQUM3QyxJQUFNa0MsRUFBZW5DLFNBQVNPLGVBQWUsUUFDekM0QixHQUNnQixJQUFJQyxhQUFhRCxFQUFjLENBQ2pERSxtQkFBb0IsZUFHbkJDLFNBQVMsY0FBZSxDQUN4QixDQUNDQyxLQUFNLFdBQ05DLGNBQWMsS0FHZkYsU0FBUyxhQUFjLENBQ3ZCLENBQ0NDLEtBQU0sY0FHUEQsU0FBUyxvQkFBcUIsQ0FDOUIsQ0FDQ0MsS0FBTSxZQUVQLENBQ0NBLEtBQU0sV0FHUEQsU0FBUyxZQUFhLENBQ3RCLENBQ0NDLEtBQU0sWUFFUCxDQUNDQSxLQUFNLGNBR1BELFNBQVMsbUJBQW9CLENBQzdCLENBQ0NDLEtBQU0sWUFFUCxDQUNDQSxLQUFNLFlBRVAsQ0FDQ0UsVUFBVyxTQUFDOUIsRUFBTytCLEdBQ2xCLE9BQUlBLEVBQU8sZUFBZ0JBLEVBQU8sYUFBYUMsTUFHdkNoQyxJQUZxQitCLEVBQU8sYUFBYUMsS0FBS2hDLEtBTXZELEVBQ0E2QixhQUFjLGlDQUtuQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0Ly9DcmVhdGUgWWVhckxpc3RcclxuXHJcblx0Y29uc3QgbWF4WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuXHRcdG1pblllYXIgPSBtYXhZZWFyIC0gOTksXHJcblx0XHRzZWxlY3RZZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyXCIpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gbWluWWVhcjsgaSA8PSBtYXhZZWFyOyBpKyspIHtcclxuXHRcdGNvbnN0IG9wdGlvblllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG5cdFx0b3B0aW9uWWVhci52YWx1ZSA9IGk7XHJcblx0XHRvcHRpb25ZZWFyLmlubmVySFRNTCA9IGk7XHJcblx0XHRzZWxlY3RZZWFyLmFwcGVuZENoaWxkKG9wdGlvblllYXIpO1xyXG5cdH1cclxuXHQvLyBDcmVhdGUgTW9udGhMaXN0XHJcblx0Y29uc3Qgc2VsZWN0TW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRoXCIpO1xyXG5cdGNvbnN0IG1vbnRocyA9IFsuLi5BcnJheSgxMikua2V5cygpXS5tYXAoKGtleSkgPT5cclxuXHRcdG5ldyBEYXRlKDAsIGtleSkudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KVxyXG5cdCk7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtb250aHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IG9wdGlvbk1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuXHRcdG9wdGlvbk1vbnRoLnZhbHVlID0gbW9udGhzW2ldO1xyXG5cdFx0b3B0aW9uTW9udGguaW5uZXJIVE1MID0gbW9udGhzW2ldO1xyXG5cdFx0c2VsZWN0TW9udGguYXBwZW5kQ2hpbGQob3B0aW9uTW9udGgpO1xyXG5cdH1cclxuXHQvLyBDcmVhdGUgRGF5TGlzdFxyXG5cdGNvbnN0IHNlbGVjdERheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5XCIpO1xyXG5cdGNvbnN0IGRheXNPZk1vbnRoID0gMzE7XHJcblx0Zm9yIChsZXQgZGF5ID0gMTsgZGF5IDw9IGRheXNPZk1vbnRoOyBkYXkrKykge1xyXG5cdFx0Y29uc3Qgb3B0aW9uRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuXHRcdG9wdGlvbkRheS52YWx1ZSA9IGRheTtcclxuXHRcdG9wdGlvbkRheS5pbm5lckhUTUwgPSBkYXk7XHJcblx0XHRzZWxlY3REYXkuYXBwZW5kQ2hpbGQob3B0aW9uRGF5KTtcclxuXHR9XHJcblx0Ly8gU2VuZCBmb3JtXHJcblx0Y29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fYnRuXCIpO1xyXG5cdGZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXMtaW52YWxpZFwiKTtcclxuXHRcdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3JtQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtX19idG5fYW5pbWF0aW9uXCIpO1xyXG5cdFx0fVxyXG5cdFx0Zm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIEFuaW1hdGlvbkhhbmRsZXIsIGZhbHNlKTtcclxuXHR9KTtcclxuXHRmdW5jdGlvbiBBbmltYXRpb25IYW5kbGVyKCkge1xyXG5cdFx0Zm9ybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm94X2FuaW1hdGVfMlwiKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0Y29uc3QgY2FsbGJhY2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG5cdGlmIChjYWxsYmFja0Zvcm0pIHtcclxuXHRcdGNvbnN0IHZhbGlkYXRpb24gPSBuZXcgSnVzdFZhbGlkYXRlKGNhbGxiYWNrRm9ybSwge1xyXG5cdFx0XHRlcnJvckZpZWxkQ3NzQ2xhc3M6IFwiaXMtaW52YWxpZFwiLFxyXG5cdFx0fSk7XHJcblx0XHR2YWxpZGF0aW9uXHJcblx0XHRcdC5hZGRGaWVsZChcIiNmaXJzdC1uYW1lXCIsIFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRydWxlOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2U6IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0pXHJcblx0XHRcdC5hZGRGaWVsZChcIiNsYXN0LW5hbWVcIiwgW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJ1bGU6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdKVxyXG5cdFx0XHQuYWRkRmllbGQoXCJpbnB1dFt0eXBlPWVtYWlsXVwiLCBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cnVsZTogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cnVsZTogXCJlbWFpbFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0pXHJcblx0XHRcdC5hZGRGaWVsZChcIiNwYXNzd29yZFwiLCBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cnVsZTogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cnVsZTogXCJwYXNzd29yZFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0pXHJcblx0XHRcdC5hZGRGaWVsZChcIiNjb25maXJtcGFzc3dvcmRcIiwgW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJ1bGU6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJ1bGU6IFwicGFzc3dvcmRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhbGlkYXRvcjogKHZhbHVlLCBmaWVsZHMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGZpZWxkc1tcIiNwYXNzd29yZFwiXSAmJiBmaWVsZHNbXCIjcGFzc3dvcmRcIl0uZWxlbSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlcGVhdFBhc3N3b3JkVmFsdWUgPSBmaWVsZHNbXCIjcGFzc3dvcmRcIl0uZWxlbS52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSByZXBlYXRQYXNzd29yZFZhbHVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2U6IFwiUGFzc3dvcmRzIHNob3VsZCBiZSB0aGUgc2FtZVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0pO1xyXG5cdH1cclxuXHQvLyB3aW5kb3cudmFsaWRhdGlvbiA9IHZhbGlkYXRpb247XHJcbn0pO1xyXG4iXX0=
