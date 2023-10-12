
$(document).ready(function(){
$(".profile .icon_wrap").click(function(){
$(this).parent().toggleClass("active");
$(".notifications").removeClass("active");
});

$(".notifications .icon_wrap").click(function(){
$(this).parent().toggleClass("active");
$(".profile").removeClass("active");
});

$(".show_all .link").click(function(){
$(".notifications").removeClass("active");
$(".popup").show();
});

$(".close").click(function(){
$(".popup").hide();
});
});




function changeLanguage(language) {
    var element = document.getElementById("url");
    element.value = language;
    element.innerHTML = language;
  }
  
  function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  




  

  $(document).ready(function(){
    // Prepare the preview for profile picture
        $("#wizard-picture").change(function(){
            readURL(this);
        });
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }


/*----- check roll   sarate---*/


    ;(function( $ ){
	
      $.fn.nicelabel = function(options) {
        
        var settings = $.extend({},{
          
          
          
          uselabel: true,				
          
          checked_text: 'Checked',
          
          unchecked_text: 'Unchecked',	
          
          checked_ico: './images/tick-checked.png', 	
          
          unchecked_ico: './images/tick-unchecked.png', 	
          
        },options);		
        
        return this.each(function(){
          
          var obj = $(this),
            label_opts = toJSON($(this).attr('data-nicelabel') || '{}'), 	
            
            position_class,
            
            checked_ico,
            
            unchecked_ico,
            
            input_id;
            
          if( label_opts.position_class ) {
            
            position_class = label_opts.position_class;
            
          }else {
            
            position_class = 'nicelabel-default-position';
            
          }	
          
          if( label_opts.checked_text ) {
            
            checked_text = label_opts.checked_text;
            
          }else {
            
            checked_text = settings.checked_text;
            
          }	
          
          if( label_opts.unchecked_text ) {
            
            unchecked_text = label_opts.unchecked_text;
            
          }else {
            
            unchecked_text = settings.unchecked_text;
            
          }
          
          
          if( obj.is( ":checkbox" ) === false && obj.is( ":radio" ) === false ){
            
            return this;
            
          }
          
          input_id = obj.attr( "id" );
          
          if(input_id == null) {
            
            var input_id_number = Math.ceil( Math.random() * 1024000 );
            
            input_id = "nicelabel-" + input_id_number;
            
            while( $( "#" + input_id ).length !== 0 )
            {
              input_id_number++;
              
              input_id = "nicelabel-" + input_id_number;
              
            }
            obj.attr('id', input_id );
          }
          
          if(obj.attr("class") == "circle-nicelabel") {
            
            obj.after( create( input_id, 'circle', position_class ) );
            
          }else if(obj.attr("class") == "rect-nicelabel") {
            
            obj.after( create( input_id, 'rect', position_class ) );
            
          }else if(obj.attr("class") == "text-nicelabel"){
            
            obj.after( create( input_id, 'text', position_class, settings.uselabel, checked_text, unchecked_text, settings.checked_ico, settings.unchecked_ico) );
            
          }
          
          
        });
        
      }
      
      var create = function( input_id, label_theme ,position_class, uselabel, checked_text, unchecked_text, checked_ico, unchecked_ico) {
        
        var label_html;
        
        if(label_theme == 'circle') {
          
          label_html = '<label class="' + position_class + '" for="' + input_id + '">' +
                  '<div class="circle-btn"></div>' +
                '</label>';
                
        }else if(label_theme == 'rect') {
          
          label_html = '<label class="' + position_class + '" for="' + input_id + '">' +
                  '<div class="rect-btn"></div>' +
                '</label>';
          
        }else if(label_theme == 'text') {
          if( uselabel == true ) {
            
            label_html = '<label class="' + position_class + '" for="' + input_id + '">' +
                    '<span class="nicelabel-unchecked-image" style="background-image: url( '+ unchecked_ico +' );"></span>' +
                    '<span class="nicelabel-unchecked">'+ unchecked_text +'</span>' +
                    '<span class="nicelabel-checked-image" style="background-image: url( '+ checked_ico +' );"></span>' +
                    '<span class="nicelabel-checked">'+ checked_text +'</span>' +
                  '</label>';
                  
          }else {
            
            label_html = '<label class="' + position_class + '" for="' + input_id + '">' +
                    '<span class="nicelabel-unchecked">'+ unchecked_text +'</span>' +
                    '<span class="nicelabel-checked">'+ checked_text +'</span>' +
                  '</label>';
                  
          }
    
          
        }
        return label_html;
      };
    
      var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    
      var toJSON = function (text, reviver) {
        var j;
    
        function walk(holder, key) {
          var k, v, value = holder[key];
          if (value && typeof value === 'object') {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k)) {
                v = walk(value, k);
                if (v !== undefined) {
                  value[k] = v;
                } else {
                  delete value[k];
                }
              }
            }
          }
          return reviver.call(holder, key, value);
        }
        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text)) {
          text = text.replace(cx, function (a) {
            return '\\u' +
              ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          });
        }
    
        if (/^[\],:{}\s]*$/
            .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
              .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
              .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    
          j = eval('(' + text + ')');
    
          return typeof reviver === 'function' ?
              walk({'': j}, '') : j;
        }
    
        throw new SyntaxError('JSON.parse(): invalid or malformed JSON data');
      };
      
    }( jQuery ));



    /*----- check roll   end---*/





                                       /*--alet start--*/



    $(function ($) {
      $.widget("toggle.toggleButton", {
        options : {
          text : "Toggle",
          toggleOnColor : "green",
          onTitle : "On",
          offTitle : "Off",
          onImg: "toggleON.png",
          offImg: "toggleOFF.png",
          change : null
        },
      
         _create : function() {
          var id = this.element.attr("id");
          var checkBoxStyle = this.element.attr("style");
      
          this.element.css({
            "display" : "none"
          });
      
          this.checkboxButton = $("<label>", {
            text : this.options.text,
            "class" : "toggleButton",
            "for" : id,
            "style" : checkBoxStyle
          });
      
          this.element.after(this.checkboxButton);
      
          if (this.element.is(":checked")) {
            this.element
              .next("label").css({ "background" : this.options.toggleOnColor, "color" : "white" })
              .prop({ "title" : this.options.onTitle })
              .prepend('<span class="toggle-img" style="background:url(' + this.options.onImg + '); background-position:center;" />');
      
          } else {
            this.element
              .next("label").css({ "background" : "", "color" : "grey" })
              .prop({ "title" : this.options.offTitle })
              .prepend('<span class="toggle-img" style="background:url(' + this.options.offImg + '); background-position:center;" />');
      
          };
      
          this._on(this.element, {
            "change" : function(event) {
              if (this.element.is(":checked")) {
                this.element
                  .next("label").css({ "background" : this.options.toggleOnColor, "color" : "white" })
                  .prop({ "title" : this.options.onTitle })
                  .find(".toggle-img")
                  .css({"background" : "url(" + this.options.onImg + ")" });
              } else {
                this.element
                  .next("label").css({ "background" : "", "color" : "grey" })
                  .prop({ "title" : this.options.offTitle })
                  .find(".toggle-img")
                  .css({"background" : "url(" + this.options.offImg + ")" });
              };
            }
          });
        }
      });
    }(jQuery)); 


       /*--alet end--*/