package com.seb44main011.petplaylist.domain.music.controller;

import com.seb44main011.petplaylist.domain.music.dto.MusicDto;
import com.seb44main011.petplaylist.domain.music.mapper.MusicMapper;
import com.seb44main011.petplaylist.domain.music.service.mainService.MusicService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@Slf4j
public class MusicFileInsertController {
    private final MusicService service;
    private final MusicMapper mapper;
    @RequestMapping(value = "/music", method = RequestMethod.POST,consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> postMusicFile(@RequestPart(value = "img") MultipartFile imgFile,
                                           @RequestPart(value = "mp3") MultipartFile mp3Files,
                                           @RequestPart(value = "request") MusicDto.PostMusicFile musicData){
        List<MultipartFile> multipartFiles =List.of(imgFile,mp3Files);
        service.uploadMusic(multipartFiles,musicData);
        return ResponseEntity.ok().build();
    }
}
