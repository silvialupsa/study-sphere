package com.studysphere.backend.utils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class WebScraper {
    public void main(Long inspectorateId) {
        String url = "https://isjalba.ro/institutii-subordonate-coordonate/";
        List<String> jsonObjects = new ArrayList<>();

        try {
            Document document = Jsoup.connect(url).get();
            Element table = document.select("table").first();
            Elements rows = table.select("tr");

            for(int i=1; i<rows.stream().count(); i++) {
                Elements td = rows.get(i).select("td");
                for (Element element : td) {
                    String text = element.text();
                    text = text.replace("\u00a0", ""); // Unicode for "&nbsp;"
                    element.text(text);
                }
                String name = splitFromTd(td.get(1));
                String address = splitFromTd(td.get(2)) + ", " + splitFromTd(td.get(3)) + ", " + splitFromTd(td.get(4));
                String phoneNumber = splitFromTd(td.get(5));
                String email = splitFromTd(td.get(7));
                jsonObjects.add("{\"name\":" + "\"" +name +"\""+ "," +
                        "\"address\":"+ "\""+address+"\","+
                        "\"phoneNumber\":"+ "\""+phoneNumber+"\","+
                        "\"email\":"+ "\""+email+"\","+
                        "\"schoolInspectorate\":"+ "{\"id\":"+ inspectorateId+ "}" +"}");

                String filePath = "src/main/resources/schools.json";

                try (FileWriter fileWriter = new FileWriter(filePath)) {
                    fileWriter.write("[");
                    int count = 0;
                    for (String jsonObject : jsonObjects) {
                        if(count < jsonObjects.size()-1){
                            fileWriter.write(jsonObject + "," + "\n");
                            count++;
                        } else {
                            fileWriter.write(jsonObject + "\n");
                        }

                    }
                    fileWriter.write("]");
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String splitFromTd(Element element){
        String split = element.toString().split("<td>")[1].split("</td>")[0];
        return convertFromUpperCase(split);
    }

    private static String convertFromUpperCase(String string){
        StringBuilder stringBuilder = new StringBuilder();
        String[] words = string.split(" ");

        for (int i = 0; i < words.length; i++) {
            String el = words[i];
            String substringWithoutFirstLetter = el.substring(1);
            String firstLetter = el.substring(0, 1);

            stringBuilder.append(firstLetter + substringWithoutFirstLetter.toLowerCase());

            if (i < words.length - 1) {
                stringBuilder.append(" ");
            }
        }

        return stringBuilder.toString();
    }
}