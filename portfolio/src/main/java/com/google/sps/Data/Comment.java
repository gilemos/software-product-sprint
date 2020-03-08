package com.google.sps.data;

public final class Comment {

    private final String message;
    private final double sentimentScore;

    public Comment(String message, double score) {
        this.message = message;
        this.sentimentScore = score;
    }
}