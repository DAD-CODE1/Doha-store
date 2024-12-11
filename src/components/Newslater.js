import React, { useState } from "react";

function Newsletter() {
  const [inputValue, setInputValue] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubscription = async () => {
    // تحقق من البريد الإلكتروني باستخدام Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue)) {
      setStatusMessage("يرجى إدخال بريد إلكتروني صالح.");
      return;
    }

    try {
      const apiUrl = "https://your-api-link.com/subscribe"; // هنا ضع رابط الـ API الخاص بك

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputValue }), // إرسال البريد الإلكتروني كـ JSON
      });

      if (response.ok) {
        setStatusMessage("تم الاشتراك بنجاح! ✅");
        setInputValue(""); // تفريغ الحقل بعد الإرسال
      } else {
        const errorData = await response.json();
        setStatusMessage(
          `حدث خطأ: ${errorData.message || "يرجى المحاولة لاحقاً"}`
        );
      }
    } catch (error) {
      setStatusMessage("حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة لاحقاً.");
    }
  };

  return (
    <section className="newslater my-5">
      <div className="container text-center">
        <div
          className="newslater-main rounded w-100 p-5"
          style={{
            background:
              "linear-gradient(180deg, #480064 0%, rgba(71, 37, 123, 0.482161) 30.74%, rgba(71, 71, 145, 0) 75.59%)",
          }}
        >
          <h1
            style={{
              color: "#F200FF",
              fontSize: "45px",
              fontWeight: "700",
            }}
          >
            الأشتراك فى النشرة البريدية
          </h1>
          <h3
            style={{
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: "600",
            }}
            className="my-5"
          >
            أنضم الآن وأحصل على خصم 10% على مشترياتك التالية
          </h3>
          <div className="input-main d-flex">
            <button className="gradient-button" onClick={handleSubscription}>
              اشتراك
            </button>
            <input
              type="email"
              className="gradient-input"
              placeholder="ادخل البريد الالكتروني"
              value={inputValue}
              onChange={handleInputChange}
              style={{ textAlign: "right" }}
            />
          </div>
          {statusMessage && (
            <p
              style={{
                color: statusMessage.includes("✅") ? "green" : "red",
                marginTop: "20px",
              }}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
