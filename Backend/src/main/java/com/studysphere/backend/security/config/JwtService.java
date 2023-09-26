package com.studysphere.backend.security.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private static final String SECRET_KEY="4Z1pZxP4cDFd+gxuT3g0XK4uHWbaRcbpJTNuucjbegO5Rm/YNrcWwzxNshoUIUBE0G+4Mn/w1NTkxTh5s6svnj0Va0ejvj+ldGH5uBJJ794vOAg1w9nwafDh+uA/GNz1quzdqSo/lUbacblmG/JdOJ3ougW2gFcL5eTcctEmu+9bpUuoH2vXRxl+FVsqr8mrg130Vi6Pi+HIcgs6gZhzb2kZNIIb8zHI1X7iVlaXQX/Cqd+KrozgdX4FQHsFRDAhTL5AOhVrqpH7yUf3X4RolhQ+9xTTDwdyiUYk7quOB1mJPnTS71qD3j1dTuNn3Q+M8qC0d8MB6Iyyi15Us/XN02mIjVZBy+FrKis0GLIWoHE=\n";
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ){
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*24))
//                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJwt(token)
                .getBody();
    }

    private Key getSigningKey() {
        byte[] keyBytes= Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
