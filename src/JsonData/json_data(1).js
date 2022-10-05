export const jsonData = {
  ACCESS: [
    {
      status: "200",
      source: { index: "/index.html" },
      from: { TR: "104.66.64.21" },
      detail: "Attempted to access",
    },

    {
      status: "200",
      source: { login: "/login.php" },
      from: { TR: "104.66.64.21" },
      detail: "Attempted to login",
    },

    {
      status: "200",
      source: { generic: "/basvurular" },
      from: { TR: "104.66.64.21" },
      detail: "Attempted to access",
    },

    {
      status: "200",
      source: { generic: "/basvurular" },
      from: { TR: "104.66.64.21" },
      detail: "Attempted to access",
    },

    {
      status: "200",
      source: { generic: "/basvurular-en" },
      from: { UK: "5.44.16.25" },
      detail: "Attempted to access",
    },

    {
      status: "200",
      source: { generic: "/basvurular-en" },
      from: { UK: "5.44.21.75" },
      detail: "Attempted to access",
    },

    {
      status: "200",
      source: { login: "/login.php" },
      from: { UK: "5.44.21.75" },
      detail: "Attempted to login",
    },

    {
      status: "200",
      source: { generic: "/search?q=how+to+use+json+datasets" },
      from: { TR: "104.66.64.21" },
      detail: "Attempted to access",
    },

    {
      status: "200",
      source: {
        generic:
          "/search?q=how+to+create+pie+chart+from+json+data+with+javascript",
      },
      from: { TR: "104.66.64.47" },
      detail: "Attempted to access",
    },
  ],
  FORBIDDEN: [
    {
      status: "403",
      source: { ".htaccess": "/.htaccess" },
      from: { TR: "104.22.64.79" },
      detail: "Restricted access",
    },
    {
      status: "403",
      source: { ".htpasswd": "/.htpasswd" },
      from: { TR: "104.69.24.21" },
      detail: "Restricted access",
    },
    {
      status: "403",
      source: { "wp-admin": "/wp-admin.php" },
      from: { TR: "104.66.64.21" },
      detail: "Restricted access",
    },

    {
      status: "403",
      source: { "wp-admin": "/cgi-bin" },
      from: { TR: "104.66.64.99" },
      detail: "Restricted access",
    },

    {
      status: "403",
      source: { "wp-admin": "/cgi-bin" },
      from: { CHINA: "1.10.11.44" },
      detail: "Restricted access",
    },
  ],
  ERROR: [
    {
      status: "500",
      source: {
        exploit_attempt:
          "/index.html/%%20%AND (SELECT * FROM (SELECT(SLEEP(5)))bAKL) AND 'vRxe'='vRxe",
      },
      title: "Server Error",
      from: { TR: "104.66.64.21" },
      detail: "An unexpected error occurred",
    },

    {
      status: "500",
      source: {
        exploit_attempt:
          "/index.html/%%20%A ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21-- ",
      },
      title: "Server Error",
      from: { TR: "104.26.22.61" },
      detail: "An unexpected error occurred",
    },

    {
      status: "500",
      source: { exploit_attempt: "/wp-admin.php?user=....//....//etc/passwd" },
      title: "Server Error",
      from: { TR: "104.26.22.61" },
      detail: "An unexpected error occurred",
    },
  ],
};
