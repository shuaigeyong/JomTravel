<html>
<head>
<title>send to your email</title>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<meta name="Jmail" content="use jmail send to your email">
<meta name="send to your email" content="use jmail send to your email">
<title>send to your email</title>
</head>

<body>
company=Request.Form ("company")
website=Request.Form ("website")
fname=Request.Form ("fname")
lname=Request.Form ("lname")
email=Request.Form ("email")
phone=Request.Form ("phone")
country=Request.Form ("country")
city=Request.Form ("city")
message=Request.Form ("message")


mess = mess & "Company:" & company & vbcrlf
mess = mess & "Website:" & website & vbcrlf
mess = mess & "First name:" & fname & vbcrlf
mess = mess & "Last name:" & lname & vbcrlf
mess = mess & "Email address:" & email & vbcrlf
mess = mess & "Phone:" & phone & vbcrlf
mess = mess & "Country:" & country & vbcrlf 
mess = mess & "City / Locality:" & city & vbcrlf
mess = mess & "Message:" & message & vbcrlf


Set JMail=Server.CreateObject("JMail.Message")
JMail.silent = true                 '则errorcode包含的是错误代码
JMail.Logging=True                '是否使用日志
JMail.Charset="gb2312"
JMail.ContentType = "text/plain"       'text/html是超文本格式text/plain是文本格式
JMail.MailServerUserName = "gewell@163.com" '您的邮件服务器登录名
JMail.MailServerPassword = "123654"         '登录密码
JMail.From = "gewell@163.com"                  '发件人(要填合法正确邮箱才能发出去信件)
JMail.FromName = "gewell"                 '发件人姓名，引号内的内容可以修改为符合自己的信息
JMail.AddRecipient "gewell@163.com"      '收件人
JMail.Subject = "WebMail"      '主题，引号内的内容可以修改为自己认为合适的主题
JMail.Body = mess     '通过使用前面的mess调用获取到得表单信息

JMail.Send "smtp.163.com"                        'smtp服务器地址
JMail.Priority=3                               '1: 最高优先级.2:高 3:普通 4:低 5:最低
Set JMail=nothing
%>
<CENTER>
Success Congratulation
</CENTER>
<p align="center">---  <a href="text.html">Go back to your website </a>> ---</p> 
</body>

</html>