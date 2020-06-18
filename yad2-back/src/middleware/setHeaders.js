module.exports = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src *; script-src 'self' 'sha256-m5KNzjvGgQ8MgzI8EMIRHyNyascjtXxEnY9EhqPShvM=' https://*.googleapis.com; img-src https: data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='; frame-ancestors 'none';");
    res.setHeader("Referrer-Policy", "no-referrer, strict-origin-when-cross-origin");
    res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    next();
};