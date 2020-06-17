//버전 0.1
//에이션블록, EntSave블록등을 활용하였습니다. ation, avocad5, thoratica님께 감사드립니다.
//오픈소스입니다.

var 
LibraryCreator = {
    start: (blocksJSON, category, text) => {
        let blockArray = new Array
        // LibraryCreator 가져오기
        Entry.staticBlocks = [
            {
                category: 'start',
                blocks: [
                    'when_run_button_click',
                    'when_some_key_pressed',
                    'mouse_clicked',
                    'mouse_click_cancled',
                    'when_object_click',
                    'when_object_click_canceled',
                    'when_message_cast',
                    'message_cast',
                    'message_cast_wait',
                    'when_scene_start',
                    'start_scene',
                    'start_neighbor_scene',
                    'check_object_property',
                    'check_block_execution',
                    'switch_scope',
                    'is_answer_submited',
                    'check_lecture_goal',
                    'check_variable_by_name',
                    'show_prompt',
                    'check_goal_success',
                    'positive_number',
                    'negative_number',
                    'wildcard_string',
                    'wildcard_boolean',
                    'register_score',
                ],
            },
            {
                category: 'flow',
                blocks: [
                    'wait_second',
                    'repeat_basic',
                    'repeat_inf',
                    'repeat_while_true',
                    'stop_repeat',
                    '_if',
                    'if_else',
                    'wait_until_true',
                    'stop_object',
                    'restart_project',
                    'when_clone_start',
                    'create_clone',
                    'delete_clone',
                    'remove_all_clones',
                ],
            },
            {
                category: 'moving',
                blocks: [
                    'move_direction',
                    'bounce_wall',
                    'move_x',
                    'move_y',
                    'move_xy_time',
                    'locate_x',
                    'locate_y',
                    'locate_xy',
                    'locate_xy_time',
                    'locate',
                    'locate_object_time',
                    'rotate_relative',
                    'direction_relative',
                    'rotate_by_time',
                    'direction_relative_duration',
                    'rotate_absolute',
                    'direction_absolute',
                    'see_angle_object',
                    'move_to_angle',
                ],
            },
            {
                category: 'looks',
                blocks: [
                    'show',
                    'hide',
                    'dialog_time',
                    'dialog',
                    'remove_dialog',
                    'change_to_some_shape',
                    'change_to_next_shape',
                    'add_effect_amount',
                    'change_effect_amount',
                    'erase_all_effects',
                    'change_scale_size',
                    'set_scale_size',
                    'flip_x',
                    'flip_y',
                    'change_object_index',
                ],
            },
            {
                category: 'brush',
                blocks: [
                    'brush_stamp',
                    'start_drawing',
                    'stop_drawing',
                    'set_color',
                    'set_random_color',
                    'change_thickness',
                    'set_thickness',
                    'change_brush_transparency',
                    'set_brush_tranparency',
                    'brush_erase_all',
                ],
            },
            {
                category: 'text',
                blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
            },
            {
                category: 'sound',
                blocks: [
                    'sound_something_with_block',
                    'sound_something_second_with_block',
                    'sound_from_to',
                    'sound_something_wait_with_block',
                    'sound_something_second_wait_with_block',
                    'sound_from_to_and_wait',
                    'sound_volume_change',
                    'sound_volume_set',
                    'sound_silent_all',
                ],
            },
            {
                category: 'judgement',
                blocks: [
                    'is_clicked',
                    'is_press_some_key',
                    'reach_something',
                    'boolean_basic_operator',
                    'boolean_and_or',
                    'boolean_not',
                ],
            },
            {
                category: 'calc',
                blocks: [
                    'calc_basic',
                    'calc_rand',
                    'coordinate_mouse',
                    'coordinate_object',
                    'get_sound_volume',
                    'quotient_and_mod',
                    'calc_operation',
                    'get_project_timer_value',
                    'choose_project_timer_action',
                    'set_visible_project_timer',
                    'get_date',
                    'distance_something',
                    'get_sound_duration',
                    'get_user_name',
                    'length_of_string',
                    'combine_something',
                    'char_at',
                    'substring',
                    'index_of_string',
                    'replace_string',
                    'change_string_case',
                ],
            },
            {
                category: 'variable',
                blocks: [
                    'variableAddButton',
                    'listAddButton',
                    'ask_and_wait',
                    'get_canvas_input_value',
                    'set_visible_answer',
                    'get_variable',
                    'change_variable',
                    'set_variable',
                    'show_variable',
                    'hide_variable',
                    'value_of_index_from_list',
                    'add_value_to_list',
                    'remove_value_from_list',
                    'insert_value_to_list',
                    'change_value_list_index',
                    'length_of_list',
                    'is_included_in_list',
                    'show_list',
                    'hide_list',
                ],
            },
            {
                category: 'func',
                blocks: ['functionAddButton'],
            },
            {
                category: 'analysis',
                blocks: [
                    'analizyDataAddButton',
                    'append_row_to_table',
                    'insert_row_to_table',
                    'delete_row_from_table',
                    'set_value_from_table',
                    'get_table_count',
                    'get_value_from_table',
                    'calc_values_from_table',
                    'open_table_chart',
                    'close_table_chart',
                ],
            },
            {
                category: 'ai_utilize',
                blocks: [
                    'aiUtilizeBlockAddButton',
                    'aiUtilizeModelTrainButton',
                    'audio_title',
                    'check_microphone',
                    'speech_to_text_convert',
                    'speech_to_text_get_value',
                    'get_microphone_volume',
                    'tts_title',
                    'read_text',
                    'read_text_wait_with_block',
                    'set_tts_property',
                    'translate_title',
                    'get_translated_string',
                    'check_language',
                    'video_title',
                    'video_draw_webcam',
                    'video_check_webcam',
                    'video_flip_camera',
                    'video_set_camera_opacity_option',
                    'video_motion_value',
                    'video_toggle_model',
                    'video_is_model_loaded',
                    'video_number_detect',
                    'video_toggle_ind',
                    'video_body_part_coord',
                    'video_face_part_coord',
                    'video_detected_face_info',
                ],
            },
            {
                category: 'expansion',
                blocks: [
                    'expansionBlockAddButton',
                    'weather_title',
                    'check_weather',
                    'check_finedust',
                    'get_weather_data',
                    'get_current_weather_data',
                    'get_today_temperature',
                    'check_city_weather',
                    'check_city_finedust',
                    'get_city_weather_data',
                    'get_current_city_weather_data',
                    'get_today_city_temperature',
                    'festival_title',
                    'count_festival',
                    'get_festival_info',
                    'behaviorConductDisaster_title',
                    'count_disaster_behavior',
                    'get_disaster_behavior',
                    'behaviorConductLifeSafety_title',
                    'count_lifeSafety_behavior',
                    'get_lifeSafety_behavior',
                ],
            },
            {
                category: 'arduino',
                blocks: [
                    'arduino_reconnect',
                    'arduino_open',
                    'arduino_cloud_pc_open',
                    'arduino_connect',
                    'arduino_download_connector',
                    'download_guide',
                    'arduino_download_source',
                    'arduino_noti',
                ].concat(EntryStatic.DynamicHardwareBlocks),
            }
        ];
        EntryStatic.getAllBlocks = () => {
            return Entry.staticBlocks;
        }
        function updateCategory(category, options) {
            Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                { category: 'start', visible: true },
                { category: 'flow', visible: true },
                { category: 'moving', visible: true },
                { category: 'looks', visible: true },
                { category: 'brush', visible: true },
                { category: 'text', visible: true },
                { category: 'sound', visible: true },
                { category: 'judgement', visible: true },
                { category: 'calc', visible: true },
                { category: 'variable', visible: true },
                { category: 'func', visible: true },
                { category: 'analysis', visible: true },
                { category: 'ai_utilize', visible: true },
                { category: 'expansion', visible: true },
                { category: 'arduino', visible: true },
                { category: category, visible: true }
            ]);
            for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                    $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
                }
            }
            Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
            Entry.playground.blockMenu._generateCategoryCode(category);
            if (options) {
                if (options.background) {
                    $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
                    $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
                    if (options.backgroundSize) {
                        $(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
                    }
                }
                if (options.name) {
                    $(`#entryCategory${category}`)[0].innerText = options.name
                }
            }
        }
        function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
            Entry.block[blockname] = {
                color: color.color,
                fontColor: color.font,
                outerLine: color.outline,
                skeleton: skeleton,
                statement: [],
                params: params.params,
                events: {},
                def: {
                    params: params.define,
                    type: blockname
                },
                paramsKeyMap: params.map,
                class: _class ? _class : 'default',
                func: func,
                template: template
            }
        }
        // 블록 추가하기
        for (let i in blocksJSON) {
            let block = blocksJSON[i]
            blockArray.push(block.name)
            addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton)
        }
        // 블록 반영
        Entry.staticBlocks.push({ category: category, blocks: blockArray })
        // 카테고리 업데이트
        if (typeof useWebGL == "undefined") {
            updateCategory(category)
            // 아이콘 적용
            $('head').append(`<style>#entryCategory${category}{background-image:url(/lib/entry-js/images/variable.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/variable_on.svg);background-color:#cc419b; border-color:#cc419b;color:#fff}</style>`)
            // 카테고리 이름 적용
            $(`#entryCategory${category}`).append(text)
        }
        console.log('%c작품블록이 작동시작되었습니다.', 'background-color: #00FF00; color: #e9ecef; padding: .7rem; font-family: sans-serif; font-size: .9rem; border-radius: 99999rem;')
        console.log('%c버전 0.1 ation님과 avocad5님, thoratica님등에게 감사드립니다.', 'font-family: sans-serif; font-size: .7rem')
    }
}
let blockPOST

//블록추가시작
{

    {
      name: "text_inform",          //홍보에 유용한 블록
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '홍보',
          color: '#00FF00',
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "inform"
    },
      
      name: "posting",      //특정게시판에 특정내용의 글 올리기(악용금지.악용시 신고)  //에이션블록 참고했습니다. 감사합니다.
      template: "제목:%1 내용:%2의 글을 %3 게시판에 올리기%4",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "악용하지"
        },
        {
          type: "Block",
          accept: "string",
          value: "마세요"
        },
        {
          type: "Dropdown",
          options: [
            ["묻고답하기", 'qna'],
            ["노하우&팁", 'tips'],
            ["엔트리 이야기", "free"]
            ["제안 및 건의", "report"]
          ],
          value: "free"
        },
        {
          type: "Indicator",
          img: "block_icon/block_analysis.svg",
          size: "11"
        }
      ],
      def: [],
      map: {
        TITLE: 0,
        CONTENT: 1,

        TYPE: 2
      },
      class: "posting",
      func: async(sprite, script) => {

        //게시판 종류 정하기
        if (script.getValue("TYPE", script) == "qna") {
          var koreantype = "묻고답하기"
        } else if (script.getValue("TYPE", script) == "tips") {
          var koreantype = "노하우&팁"
        } else if (script.getValue("TYPE", script) == "free") {
          var koreantype = "엔트리 이야기"
        } else if (script.getValue("TYPE", script) == "report") {
          var koreantype = "제안 및 건의"
        }


        if (confirm("koreantype + " 게시판에 글을 올리시겠습니까?(악용방지기능) ") {
            fetch('https://playentry.org/api/discuss/', {
                method: 'POST',
                body: `{ "images": [], "category": "${script.getValue('TYPE', script)}", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return script.callReturn()
        } else {
          return false
        }

      } //async 끝 중괄호
    },

      name: "update",
      template: "작품 업데이트하기 %1",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
  if (confirm('작품을 업데이트하시겠습니까?(악용방지기능)')   //아보카도님의 avo매크로 사용했습니다. 감사드립니다.
     $('.editDescriptionBtn').trigger('click')
     $('.editConfirmBtn').trigger('click')
     console.log('작품이 업데이트되었습니다.')

  else
     console.log('작품이 업데이트 되지 않았습니다.')
//작품정보
    {
      name: "text_informationofproject",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '작품 정보',
          color: '#00FF00',
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "inform"
    },

{
      name: "getid",
      template: "작품아이디",     //작품의 아이디 리턴
      skeleton: "basic_string_field",
      color: {
        default: getcolor
      },
      params: [
      ],
      def: [],
      map: {
      },
      class: "get",
      func: async(sprite, script) => {
        return Entry.projectId;
      }
    }

 {
    name: 'likeList',
    template: '이 작품에 좋아요를 누른 사람수', //좋아요 수 리턴
    skeleton: 'basic_string_field',
    color: {
      default: '#007bff',
      darken: '#006ce0'
    },
    params: [],
    def: [],
    map: {},
    class: 'text',
    func: async (sprite, script) => {
      let res = await fetch(`https://playentry.org/api/project/likes/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
      let data = await res.json()
      return data.length
    },

 {
    name: 'likeList',
    template: '이 작품에 관심작품을 누른 사람수', //관작 수 리턴
    skeleton: 'basic_string_field',
    color: {
      default: '#007bff',
      darken: '#006ce0'
    },
    params: [],
    def: [],
    map: {},
    class: 'text',
    func: async (sprite, script) => {
      let res = await fetch(`https://playentry.org/api/project/interest/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
      let data = await res.json()
      return data.length
    },

//자바스크립트
    {
      name: "text_javascript",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '자바스크립트',
          color: '#00FF00',
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "inform"
    },

   {
      name: 'javascriptcode',
      template: '%1실행 %2',
      skeleton: 'basic',
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "자바스크립트코드"
        },
        {
          type: "Indicator",
          img: 'block_icon/block_analysis.svg',
          size: '11'
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "problock",
      func: async(sprite, script) => {
          eval(script.getValue("VALUE", script))
        }
      }
    },

{
      name: "variable_change",
      template: "(자바스크립트) 변수 %1의 값을 %2로 정의하기 %3", //여러 비공식블럭 참고했습니다..
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "user.username"
        },
        {
          type: "Block",
          accept: "string",
          value: "entry"
        },
        {
          type: "Indicator",
          img: "block_icon/block_analysis.svg",
          size: "11"
        }
      ],
      def: [],
      map: {
        NAME: 0,
        CHANGE: 1
      },
      class: "problock",
      func: async(sprite, script) => {
          let name = script.getValue("NAME", script);
          let change = script.getValue("CHANGE", script);
          eval(`${script.getValue('NAME', script)} = '${script.getValue('CHANGE', script)}'`);
          return script.callReturn();
      }
    },

//콘솔
    {
      name: "text_javascript",
      template: "%1",
      skeleton: "basic_text",
      color: {
        default: EntryStatic.colorSet.common.TRANSPARENT,
      },
      params: [
        {
          type: 'Text',
          text: '콘솔',
          color: '#00FF00',
          align: 'center'
        }
      ],
      def: [],
      map: {},
      class: "inform"
    },

{
      name: "consolelog",
      template: "%1내용을 %2 콘솔에 작성하기 %3",
      skeleton: "basic",
      color: {
         default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "엔트리"
        },
        {
          type: "Dropdown",
          options: [
            ["엔트리", "console"],
            ["브라우저", "browser"]
          ],
          value: "console"
        },
        {
          type: 'Indicator',
          img: 'block_icon/block_analysis.svg',
          size: 11
        }
      ],
      def: [],
      map: {
        LEFTHAND: 0,
        RIGHTHAND: 1
      },
      class: "console",
      func: async(sprite, script) => {
        if (script.getValue("RIGHTHAND", script) == "console") {
          Entry.console.print(script.getValue("LEFTHAND", script));
        } else if (script.getValue("RIGHTHAND", script) == "browser") {
          console.log(script.getValue("LEFTHAND", script));
        }
      }

    },


    {
      name: "clearconsole",
      template: "%1 콘솔의 내용모두 지우기 %2",
      skeleton: "basic",
      color: {
        default: EntryStatic.colorSet.block.default.ANALYSIS
      },
      params: [
        {
          type: "Dropdown",
          options: [
            ["엔트리", "console"],
            ["브라우저", "browser"]
          ],
          value: "console"
        },
        {
          type: 'Indicator',
          img: 'block_icon/block_analysis.svg',
          size: 11
        }
      ],
      def: [],
      map: {
        VALUE: 0
      },
      class: "console",
      func: async(sprite, script) => {
        if (script.getValue("VALUE", script) == "console") {
          Entry.console.clear()
        } else if (script.getValue("VALUE", script) == "browser") {
          console.clear()
        }
      }

    },

LibraryCreator.start(blocks, 'API', '작품') //원하는 이름을 입력하세요 :)
document.title = "작품블록이 사용되고 있습니다.";
