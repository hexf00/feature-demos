# php

- curl如何发送json文本只需要设置
  ```php
  curl_setopt ($ch, CURLOPT_HTTPHEADER, array('Content-type:application/json'));
  ```
